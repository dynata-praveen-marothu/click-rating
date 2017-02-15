namespace clickrating{
    export class Scale{

        parent:ScaleContainer;
        index : number;

        view: HTMLElement;

        constructor(parent:ScaleContainer,index:number)
        {
            this.parent=parent;
            this.index=index;
        }

        init()
        {
            let config = this.parent.parent.config;
            let props = config.scales[this.index];

            this.view=document.createElement("div")
            this.view.id = config.params.qid + "_scale_" + props.precode;
            this.view.className="cls-scale";
            this.view.innerHTML = "<div class='cls-text cls-noselect'>" + props.label + "</div>";
            this.parent.view.appendChild(this.view)    
        }

        show(){
            
        }


    }
}