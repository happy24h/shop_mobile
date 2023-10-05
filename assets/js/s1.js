const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// console.log(document.querySelector('#heading').innerText)
// console.log($('#heading').innerText)

const app = (() => {
    const cars = ['Chào bạn','Chúc bạn một ngày vui vẻ']

    const input = $('#input-message-js')
    const submit = $('#submit-message-js')
    const root = $('#root-message-js')

    return {
        add(car) {
            cars.push(car)
        },
        delete(index){
            cars.splice(index,1)
        },
        render(){
            const html = cars.map((car,index) => ` <li>${car}
 <span class="delete" data-index="${index}">&times</span>
 </li> `).join('')
            root.innerHTML = html
            // console.log(html)
        },
        handleDelete(e) {    // e là PointerEvent(Sự kiện con trỏ)
            //console.log(e.target) // target là mục tiêu bấm con trỏ vào đâu thì trả ra cái đó
            const deleteBtn = e.target.closest('.delete')
            // closest selector đến element gần nhất đúng element chỉ định và xuyên qua element cha của nó
            // console.log(deleteBtn)
            if (deleteBtn) {
                const index = deleteBtn.dataset.index // dataset.index => data-index(class ở trên )
                // console.log(index)
                this.delete(index)
                this.render()
            }
        },
        init() {
            // const _this = this
            // Handle Dom events
            submit.onclick =  () => { // arrow function trả this ra init
                const car = input.value
                this.add(car)
                this.render()
                input.value = null
                input.focus()
            }
            root.onclick = this.handleDelete.bind(this)
            this.render() // this là summit.onclick => render ra <li> trong <ul>
        }

    }
})();
app.init()
