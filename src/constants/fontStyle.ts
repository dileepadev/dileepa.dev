
import { Poppins } from "next/font/google";

const MainFont = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });

export default MainFont;