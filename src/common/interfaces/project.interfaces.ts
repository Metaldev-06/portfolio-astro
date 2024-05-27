export interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  important: boolean;
  primary: boolean;
  technologies: string[];
  server_status?: boolean;
  client_status?: boolean;
  url: string;
  url_image: string;
}
