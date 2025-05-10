export type NotebookData = {
  image: string;
  title: string;
  description: string | React.ReactNode;
  githubLink?: string;
  descriptionFull?: string | React.ReactNode;
  src?: string;
  setSelectedNotebook?: Function;
  images?: string[];
  menuID?: number | undefined;
}
