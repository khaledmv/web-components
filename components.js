
/**
 * WebComponents class
 */

class WebComponent extends HTMLElement{
    constructor(){
        super();
        // console.log(this.innerHTML);

        // 1. first method to add content with innerHTML

        // this.innerHTML = `
        //   <div>
        //       <span> This is a web component</span>
        //   </div>
        // `;


        // 2. second way add content

        // const div = document.createElement('div');
        // const  span = document.createElement('span');
        // span.innerHTML = " This is a web component";

        // div.appendChild(span);
        // this.appendChild(div);

        // console.log(this.tagName.h1);

        // 3. Parse a HTML string

        const html = `<div><span>This is a web componnents</span></div>`;
        const innerHTML = new DOMParser().parseFromString(html, 'text/html').body.innerHTML;
        this.innerHTML = innerHTML;
    }

  
}


customElements.define('web-component', WebComponent);