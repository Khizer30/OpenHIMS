import withMT from "@material-tailwind/react/utils/withMT";
import { type Config } from "tailwindcss";

const config: Config =
{
  content:
    [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
  theme:
  {
    colors:
    {
      "grey": "#2D3134"
    },
    fontFamily:
    {
      primary: ["Raleway Variable", "sans-serif"],
      secondary: ["Lato", "sans-serif"]
    },
    container:
    {
      center: true
    }
  },
  plugins: []
};

export default withMT(config);