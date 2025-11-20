import fs from "fs";
import Papa from "papaparse";
import path from "path";

interface CSVTalk {
  "First Name": string;
  "Last name": string;
  "Job Title": string;
  Company: string;
  Linkedin: string;
  "Title of the talk": string;
  "Abstract of the talk ": string;
  Bio: string;
}

export function parseTalksCSV() {
  const csvPath = path.join(process.cwd(), "..", "talks.csv");
  const csvContent = fs.readFileSync(csvPath, "utf-8");

  const result = Papa.parse<CSVTalk>(csvContent, {
    header: true,
    skipEmptyLines: true,
  });

  const talksMap = new Map<
    string,
    { abstract: string; speakers: Map<string, { bio: string }> }
  >();

  for (const row of result.data) {
    const title = row["Title of the talk"]?.trim();
    const firstName = row["First Name"]?.trim();
    const lastName = row["Last name"]?.trim();
    const abstract = row["Abstract of the talk "]?.trim();
    const bio = row["Bio"]?.trim();

    if (!title) continue;

    if (!talksMap.has(title)) {
      talksMap.set(title, {
        abstract: abstract || "",
        speakers: new Map(),
      });
    }

    const talk = talksMap.get(title);
    if (!talk) continue;

    if (firstName) {
      const fullName = lastName ? `${firstName} ${lastName}` : firstName;
      talk.speakers.set(fullName, { bio: bio || "" });
    }
  }

  return talksMap;
}
