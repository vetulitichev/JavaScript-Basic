class ResizeFlex {
  constructor(elems) {
    this.elems = elems;
    this._onMouseDown = this._onMouseDown.bind(this);
    this.section = document.querySelector('section');
    // this.section.addEventListener('mousedown', this._onMouseDown, false);
    this.elems.forEach(({ resize }, index) => {
      resize.addEventListener('mousedown', this._onMouseDown(index), false);
    });
  }

  _onMouseDown(headerIndex) {
    return event => {
      event.preventDefault();
      this.eventOnMouseMove(headerIndex);
    };
  }
  eventOnMouseMove(headerIndex) {
    const mouseDownScreenX = event.pageX;
    const body = document.body;

    this.event = this._onMouseMove(mouseDownScreenX, headerIndex);
    body.addEventListener('mousemove', this.event, false);
    body.addEventListener('mouseup', () => {
      body.removeEventListener('mousemove', this.event, false);
    });
  }
  _onMouseMove(mouseDownScreenX, headerIndex) {
    return event => {
      console.group('clicked div:', headerIndex);
      console.log('pageX', event.pageX);
      console.log('mouseDownScreenX', mouseDownScreenX);
      console.groupEnd();
    };
  }

  static setInitialFlex() {
    let blocks = [...document.querySelectorAll('section>div')].map((block, index) => {
      return { name: [block.className], block, width: block.offsetWidth, resize: block.firstElementChild };
    });
    blocks.forEach(({ block, width }) => {
      block.style.flexBasis = width + 'px';
    });
    return new ResizeFlex(blocks);
  }
}

window.onload = () => {
  const resize = ResizeFlex.setInitialFlex();
};
