
// import { Toggle } from "@/components/ui/toggle";
// import { useTheme } from "@/hooks/useTheme";
// import { MoonIcon, SunIcon } from "lucide-react";


// export default function ThemeToggle() {
//   // const [theme, setTheme] = useState<string>("light");
//   const { setTheme } = useTheme();

//   return (
//     <div>
//       <Toggle
//         variant="outline"
//         className="group data-[state=on]:hover:bg-muted text-muted-foreground data-[state=on]:text-muted-foreground data-[state=on]:hover:text-foreground size-8 rounded-full border-none shadow-none data-[state=on]:bg-transparent"
//         pressed={setTheme === "dark"}
//         onPressedChange={() =>
//           setTheme(setTheme === "dark" ? "light" : "dark")
//         }
//         // aria-label={`Switch to ${setTheme === "dark" ? "light" : "dark"} mode`}
//       >
//         {/* Note: After dark mode implementation, rely on dark: prefix rather than group-data-[state=on]: */}
//         <MoonIcon
//           size={16}
//           onClick={() => setTheme("dark")}
//           className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
//           aria-hidden="true"
//         />
//         <SunIcon
//           size={16}
//           onClick={()=> setTheme("light")}
//           className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
//           aria-hidden="true"
//         />
//       </Toggle>
//     </div>
//   );
// }


import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size="sm">
          <Sun className="h-[1rem] w-[1rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1rem] w-[1rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="text-xs" onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs" onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs" onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
