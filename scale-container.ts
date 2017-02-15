/// <reference path="./component.ts" />

namespace clickrating{
    export class ScaleContainer{

        parent:Component;
        qid:string;
        
        scales:Scale[];
        view:HTMLElement;


        constructor(parent:Component)
        {
            this.parent=parent;
        }

        init()
        {
            let config=this.parent.config;
            let qid = config.params.qid;

            this.scales=[];
            this.view=<HTMLElement> document.createElement("div");
            this.view.style.width = "100%";
            this.view.className = "cls-scale-container"
            this.parent.view.appendChild(this.view);

            for( let i=0; i<config.scales.length; i++)
            {
                let scale = new Scale(this,i);
                this.scales.push(scale)
                scale.init();
                
            }
        }
    }
}