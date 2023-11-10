let in_path = "./word.html";
let out_path = "./word.docx"

const fs = require( 'fs' );

const HTMLtoDOCX = require( "html-to-docx");
const htmldocx = require('html-docx-js');
const InlineCss = require( 'inline-css' );

( async ()=>{
    // 读取HTML文件
    // 将HTML内容转化为Word文档格式
    // const docx = htmldocx.asBlob(fs.readFileSync(in_path, 'utf-8'));   

    let rawHtml = fs.readFileSync( in_path, 'utf8' );
    const htmlString = await InlineCss( rawHtml, { url: 'file://' });

    const docx = htmldocx.asBlob( htmlString, `<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
    <w:p>
      <w:pPr>
         <w:pStyle w:val="Header"/>
      </w:pPr>
      <w:r>
         <w:t>Header text</w:t>
      </w:r>
    </w:p>
  </w:hdr>` );
    const buffer = Buffer.from(await docx.arrayBuffer());
    fs.writeFile( out_path, buffer, ( err ) =>{
        if (err) {
            console.error('Error writing the Word document:', err);
        } else {
            console.log('Word document generated successfully!');
        }
    });

    return









    
  
    let rawHTMLStringWithStyle = `
    <style>
        .sans-serif{
            font-family: sans-serif;
        }
        .center{
            display: flex;
            justify-content: center;
            color : red;
        }
        p{
            margin-bottom:1.5rem;
        }
        .setColor{
            font-size:60px;
        }
    </style>
    
    <div class="sans-serif">
        <h1 class="center setColor">Text, centered</h1>
        <p>A simple paragraph that will receive margin bottom from the element selector</p>
        <div class="page-break" style="page-break-after: always"></div>
    </div>
    `;

    rawHTMLStringWithStyle = fs.readFileSync( in_path, 'utf8' );
    const inlinedHTML = await InlineCss( rawHTMLStringWithStyle, { url: 'file://' });
    console.log( inlinedHTML );
    
    const fileBuffer = await HTMLtoDOCX(inlinedHTML);


    // htmlString = fs.readFileSync( in_path, 'utf8' );
    // const fileBuffer = await HTMLtoDOCX(htmlString, null, {
    //     table: { row: { cantSplit: true } },
    //     footer: true,
    //     pageNumber: true,
    // });
    fs.writeFile(out_path, fileBuffer, (error) => {
        if (error) {
            console.log('Docx file creation failed');
            return;
        }
        console.log('Docx file created successfully');
    });
})();