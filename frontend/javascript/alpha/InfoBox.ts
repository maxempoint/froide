export default class InfoBox {
  element: HTMLElement
  editButton: HTMLElement
  editPanel: HTMLElement | undefined
  infoList: HTMLElement | undefined
  editPanelIsVisible: boolean | undefined

  constructor (infoboxContainer: HTMLElement) {
    this.element = infoboxContainer
    this.editButton = infoboxContainer.querySelector('.info-box__edit-button') as HTMLElement
    if (this.editButton) {
      this.editPanel = infoboxContainer.querySelector('.info-box__edit-panel') as HTMLElement
      this.editPanelIsVisible = false
      this.infoList = infoboxContainer.querySelector('.info-box__list') as HTMLElement

      // event listeners
      this.editButton.addEventListener('click', this.editButtonClickCallback.bind(this))
    }
  }

  editButtonClickCallback (e: MouseEvent) {
    e.preventDefault()
    if (this.editPanel && this.infoList) {
      this.editPanel.classList.toggle('d-none')
      this.infoList.classList.toggle('d-none')
      this.editButton.children[0].classList.toggle('d-none')
      this.editButton.children[1].classList.toggle('d-none')
      this.editPanelIsVisible = !this.editPanelIsVisible
    }
  }

}