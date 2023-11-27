import { useColorMode } from '@docusaurus/theme-common';

// NOTE:
// If you change the light/dark theme, the sandbox will refresh and any edits will be lost
// If theme control is less important than this limitation, then:
// • remove the findThemeLightnessMode() function declaration 
// • to have it default to the system theme, delete the entire line 34
// • to hardcode a theme, on line 34 replace findThemeLightnessMode() with "theme=light"

function findThemeLightnessMode() {
  const { colorMode, setColorMode } = useColorMode();
  return colorMode;
}

// NOTE:
// defaults for the component can be edited below
// where the parameters = a value, change the value to change the default. 
// the default values can still be changed on use

export function Zapprun({
  zaprunEditorLink = "https://zapp.run/edit/flutter-zwa206oewa30?entry=lib/main.dart&file=lib/main.dart",
  editorPreviewSplitPercent = 60, // number between 0-100. Percentage split
  heightStyle = "90vh", //css height style
  widthStyle = "100%", //css width style
}): JSX.Element {

  const splitLinkAtParams = zaprunEditorLink.split("?"); //this allows us to insert the theme param first, as it doesnt work at the end of the url

  return (
    <iframe
      src={
        splitLinkAtParams[0] +
        "?theme=" +
        findThemeLightnessMode() +
        "&" +
        "split=" + editorPreviewSplitPercent +
        "&" +
        splitLinkAtParams[1]
      }
      style={{
        "height": heightStyle,
        "width": widthStyle,
      }}
    />
  );
}
