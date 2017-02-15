/// <reference path="./component.ts" />

namespace clickrating{
    export class ItemContainer{

        parent:Component;
        qid:string;
        
        items:Item[];
        view:HTMLElement;


        constructor(parent:Component)
        {
            this.parent=parent;
        }

        init()
        {
            let config=this.parent.config;
            let qid = config.params.qid;

            this.items=[];
            this.view=<HTMLElement> document.createElement("div");
            this.view.style.width = "100%";
            this.view.className = "cls-item-container"
            this.parent.view.appendChild(this.view);

            for( let i=0; i<config.items.length; i++)
            {
                let item = new Item(this,i);
                this.items.push(item)
                item.init();
                
            }
        }
    }
}