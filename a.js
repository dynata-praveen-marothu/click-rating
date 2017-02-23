var clickrating;
(function (clickrating) {
    var Config = (function () {
        function Config() {
            this.state = {
                activeItem: null
            };
            this.params = {
                qid: "AAA"
            };
            this.items = [
                { precode: "1", label: "APPLE" },
                { precode: "2", label: "GOOGLE" },
                { precode: "3", label: "MICROSOFT" },
                { precode: "4", label: "FACEBOOK" },
            ];
            this.scales = [
                { precode: "1", label: "Very Poor" },
                { precode: "2", label: "Poor" },
                { precode: "3", label: "Acceptable" },
                { precode: "4", label: "Good" },
                { precode: "5", label: "Very Good" },
            ];
        }
        return Config;
    }());
    clickrating.Config = Config;
})(clickrating || (clickrating = {}));
var clickrating;
(function (clickrating) {
    var Item = (function () {
        function Item(parent, index) {
            var _this = this;
            this.onDragStart = function (e) {
                _this.dview = _this.view.cloneNode(true);
                _this.dview.id = "dragnode_id";
                _this.parent.parent.view.appendChild(_this.dview);
                var top = _this.view.offsetTop - _this.parent.view.offsetTop;
                var left = _this.view.offsetLeft - _this.parent.view.offsetLeft;
                _this.dview.style.cssText = "position:absolute;top:" + top + "px;left:" + left + "px";
                _this.view.style.visibility = 'hidden';
                document.addEventListener('mouseup', _this.onDragStop);
                document.addEventListener('mousemove', _this.onDrag);
            };
            this.onDragStop = function (e) {
                if (_this.dview != null)
                    _this.parent.parent.view.removeChild(_this.dview);
                _this.dview = null;
                _this.view.style.visibility = 'visible';
                document.removeEventListener('mouseup', _this.onDragStop);
            };
            this.onDrag = function (e) {
                if (_this.dview != null) {
                    var pos = _this.parent.parent.view.getBoundingClientRect();
                    var left = e.clientX - pos.left - 20;
                    var top_1 = e.clientY - pos.top - 20;
                    _this.dview.style.left = left + "px";
                    _this.dview.style.top = top_1 + "px";
                }
            };
            this.parent = parent;
            this.index = index;
        }
        Item.prototype.init = function () {
            var config = this.parent.parent.config;
            var props = config.items[this.index];
            this.view = document.createElement("div");
            this.view.id = config.params.qid + "_item_" + props.precode;
            this.view.className = "cls-item";
            this.view.innerHTML = "<div class='cls-text cls-noselect'>" + props.label + "<div>";
            this.parent.view.appendChild(this.view);
            this.view.addEventListener('mousedown', this.onDragStart);
        };
        return Item;
    }());
    clickrating.Item = Item;
})(clickrating || (clickrating = {}));
var clickrating;
(function (clickrating) {
    var Scale = (function () {
        function Scale(parent, index) {
            this.parent = parent;
            this.index = index;
        }
        Scale.prototype.init = function () {
            var config = this.parent.parent.config;
            var props = config.scales[this.index];
            this.view = document.createElement("div");
            this.view.id = config.params.qid + "_scale_" + props.precode;
            this.view.className = "cls-scale";
            this.view.innerHTML = "<div class='cls-text cls-noselect'>" + props.label + "</div>";
            this.parent.view.appendChild(this.view);
        };
        Scale.prototype.show = function () {
        };
        return Scale;
    }());
    clickrating.Scale = Scale;
})(clickrating || (clickrating = {}));
/// <reference path="./component.ts" />
var clickrating;
(function (clickrating) {
    var ItemContainer = (function () {
        function ItemContainer(parent) {
            this.parent = parent;
        }
        ItemContainer.prototype.init = function () {
            var config = this.parent.config;
            var qid = config.params.qid;
            this.items = [];
            this.view = document.createElement("div");
            this.view.style.width = "100%";
            this.view.className = "cls-item-container";
            this.parent.view.appendChild(this.view);
            for (var i = 0; i < config.items.length; i++) {
                var item = new clickrating.Item(this, i);
                this.items.push(item);
                item.init();
            }
        };
        return ItemContainer;
    }());
    clickrating.ItemContainer = ItemContainer;
})(clickrating || (clickrating = {}));
/// <reference path="./component.ts" />
var clickrating;
(function (clickrating) {
    var ScaleContainer = (function () {
        function ScaleContainer(parent) {
            this.parent = parent;
        }
        ScaleContainer.prototype.init = function () {
            var config = this.parent.config;
            var qid = config.params.qid;
            this.scales = [];
            this.view = document.createElement("div");
            this.view.style.width = "100%";
            this.view.className = "cls-scale-container";
            this.parent.view.appendChild(this.view);
            for (var i = 0; i < config.scales.length; i++) {
                var scale = new clickrating.Scale(this, i);
                this.scales.push(scale);
                scale.init();
            }
        };
        return ScaleContainer;
    }());
    clickrating.ScaleContainer = ScaleContainer;
})(clickrating || (clickrating = {}));
/// <reference path="./config.ts" />
/// <reference path="./item.ts" />
/// <reference path="./scale.ts" />
/// <reference path="./item-container.ts" />
/// <reference path="./scale-container.ts" />
var clickrating;
(function (clickrating) {
    var Component = (function () {
        function Component(qid) {
            this.config = new clickrating.Config();
            this.config.params.qid = qid;
            this.pview = window.document.getElementById(qid + "_stage");
        }
        Component.prototype.init = function () {
            var qid = this.config.params.qid;
            this.view = document.createElement("div");
            this.view.id = qid + "_component";
            this.pview.appendChild(this.view);
            this.icontainer = new clickrating.ItemContainer(this);
            this.scontainer = new clickrating.ScaleContainer(this);
            this.icontainer.init();
            this.scontainer.init();
        };
        return Component;
    }());
    clickrating.Component = Component;
})(clickrating || (clickrating = {}));
