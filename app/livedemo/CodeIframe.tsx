"use client"
import CodeMirror from '@uiw/react-codemirror'
import { useRef, useEffect,useState,FC } from 'react'
import Tabs from './Tabs'
import Panel from './Panel'
import setupPreview from './preview'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
 
const templateData = {
  'index.html':
    '<div id="app">\n  ' +
    '<h1>Hello, World!</h1>\n  ' +
    '<button>Count: 0</button>\n' +
    '</div>\n',
  'style.css':
    '#app {\n  color: #0d79d1;\n  text-align:center;\n  margin: 4rem 0;\n}\n\n' +
    'button {\n  ' +
    'cursor: pointer;\n  ' +
    'color: inherit;\n  ' +
    'background-color: #e6f4ff;\n  ' +
    'border-radius: 6px;\n  ' +
    'border: 0 none;\n  ' +
    'padding: 0.5rem 0.75rem;\n' +
    '}',
  'main.js':
    'let count = 0;\n\n' +
    'const btn = document.querySelector("button");\n\n' +
    'btn.addEventListener("click", function () {\n  ' +
    'btn.innerHTML = "Count: "+ (++count);\n' +
    '});\n\n' +
    'btn.click();\n',
}

// export const BlogDetails: FC<{ post: Blog; className?: string }> = ({ post, className }) => {
export  const  CodeIframe: FC<{   htmlfile?: string,cssfile?: string, jsfile?: string, }> = ({   htmlfile,cssfile,jsfile }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  // let htmldata 
  // try {
  //     htmldata  =  fs.re("./index.html", "utf-8")
  //   console.log(htmldata);
  // } catch (err) {
  //   console.log(err);
  // }
  // const [htmlvalue, setHtmlvalue] = useState(templateData['index.html']);
  const [htmlvalue, setHtmlvalue] = useState(htmlfile);
 
  const [cssvalue, setCssvalue] = useState(cssfile);
  const [jsvalue, setJsvalue] = useState(jsfile);

  useEffect(() => {
    setupPreview(iframeRef.current, htmlvalue , cssvalue, jsvalue);
 
  });

  function onChange(){
    //  console.log('onChange')
    //  setupPreview(iframeRef.current, htmlRef.value, templateData['style.css'], templateData['main.js']);
 
  }

    return (
      <div className="h-full">
      <div className="w-screen h-full">
        <div className="flex flex-row  h-full ">
          <div className="w-1/2 h-full">
            <Tabs>
              <Panel title="index.html">
                <CodeMirror
                  extensions={[html()]}
                  value={htmlvalue}
                  onChange={(value) => {
                    setHtmlvalue(value);
                  }}
                />
              </Panel>
              <Panel title="style.css">
                <CodeMirror
                  extensions={[css()]}
                  value={cssvalue}
                  onChange={(value) => {
                    setCssvalue(value);
                  }}
                />
              </Panel>
              <Panel title="main.js">
                <CodeMirror
                  extensions={[javascript()]}
                  value={jsvalue}
                  onChange={(value) => {
                    setJsvalue(value);
                  }}
                />
              </Panel>
            </Tabs>
          </div>
          <div className="h-full w-1/2 border-gray-200 ">
            <iframe className="h-screen  w-full" ref={iframeRef} src="about:blank" title="preview"></iframe>
          </div>
        </div>
      </div>
      </div>
    )
 
}
