/// <reference path="./config.ts" />
/// <reference path="./item.ts" />
/// <reference path="./scale.ts" />
/// <reference path="./item-container.ts" />
/// <reference path="./scale-container.ts" />


namespace clickrating
{
    export class Component
    {
        config : Config;
        view:HTMLElement;
        pview:HTMLElement;

        icontainer:ItemContainer;
        scontainer:ScaleContainer;

        constructor(qid:string)
        {
            this.config = new Config();
            this.config.params.qid = qid;
            this.pview = window.document.getElementById(qid + "_stage");
        }

        init()
        {
            let qid=this.config.params.qid;

            this.view = document.createElement("div")
            this.view.id=qid + "_component";
            this.pview.appendChild(this.view);

            this.icontainer=new ItemContainer(this)
            this.scontainer=new ScaleContainer(this)

            this.icontainer.init();
            this.scontainer.init();
        }


    }
}

