import { promises as fs } from 'fs';
import  {CodeIframe}  from "./CodeIframe"
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const htmlfile = await fs.readFile(process.cwd() + '/app/livedemo/index.html', 'utf8');
  const cssfile = await fs.readFile(process.cwd() + '/app/livedemo/style.css', 'utf8');
  const jsfile = await fs.readFile(process.cwd() + '/app/livedemo/main.js', 'utf8');
// componentDidMount() {
//     setupPreview(iframeRef, templateData['index.html'], templateData['style.css'], templateData['main.js']);
//   }
  //  setupPreview(iframeRef, templateData['index.html'], templateData['style.css'], templateData['main.js']);
  return (
 <CodeIframe htmlfile={htmlfile} cssfile={cssfile} jsfile={jsfile}  />
  )
}
