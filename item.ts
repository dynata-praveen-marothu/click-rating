namespace clickrating{
    export class Item{

        parent:ItemContainer;
        index : number;

        view: HTMLElement;
        dview:HTMLElement;

        constructor(parent:ItemContainer,index:number)
        {
            this.parent=parent;
            this.index=index;
        }

        init()
        {
            let config = this.parent.parent.config;
            let props = config.items[this.index];

            this.view=document.createElement("div")
            this.view.id = config.params.qid + "_item_" + props.precode;
            this.view.className="cls-item";
            this.view.innerHTML = "<div class='cls-text cls-noselect'>" + props.label + "<div>";
            this.parent.view.appendChild(this.view)   

            this.view.addEventListener( 'mousedown', this.onDragStart  )

        }

        onDragStart=(e:MouseEvent)=>
        {
            this.dview=<HTMLElement>this.view.cloneNode(true);
            this.dview.id="dragnode_id";
            this.parent.parent.view.appendChild(this.dview);
            let top  = this.view.offsetTop - this.parent.view.offsetTop;
            let left = this.view.offsetLeft - this.parent.view.offsetLeft;

            this.dview.style.cssText="position:absolute;top:" + top + "px;left:" + left + "px"
            this.view.style.visibility = 'hidden';
            document.addEventListener( 'mouseup'    ,  this.onDragStop )
            document.addEventListener( 'mousemove'  ,  this.onDrag )
        }

        onDragStop=(e:MouseEvent)=>
        {
            if(this.dview!=null)
            this.parent.parent.view.removeChild(this.dview);
            this.dview=null;
            this.view.style.visibility = 'visible';
            document.removeEventListener( 'mouseup' , this.onDragStop )
        }

        onDrag=(e:MouseEvent)=>
        {
            if(this.dview!=null)
            {
                let pos=this.parent.parent.view.getBoundingClientRect();

                let left = e.clientX - pos.left - 20;
                let top  = e.clientY - pos.top  - 20;

                this.dview.style.left= left + "px";
                this.dview.style.top = top + "px";
            }

        }


    }
}