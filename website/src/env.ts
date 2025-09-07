declare module "*-icon.tsx" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module "*?raw" {
  const content: string;
  export default content;
}
