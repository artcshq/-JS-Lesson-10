class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(text) {
     let div = document.createElement('div'),
     body = document.querySelector('body');
     div.textContent = text;
     body.appendChild(div); 
     div.style.cssText = `height:${this.height};
     width: ${this.width};
     background-color: ${this.bg};
     font-size: ${this.fontSize};
     text-align: ${this.textAlign}`;
    }
    
}

let obj = new Options('1000px', '1000px', 'cyan', '30px','center' );
console.log(obj);

obj.createDiv('Квасников Артур')
