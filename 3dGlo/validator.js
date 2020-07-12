class Validator {
    constructor({selector, pattern, method}) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method; 
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button'
        });
        this.error = new Set();
    }

    init() {
        
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.chekIt.bind(this)));
        this.form.addEventListener('submit', e => { 
            
            this.elementsForm.forEach(elem => this.chekIt({target: elem}));
            console.log(this.error)
           
            if (this.error.size) {
                
                e.preventDefault();
            }
        }
        )
    }

    isValid(elem) {

        const validatorMethod = {
            notEmpty(elem) {
                if(elem.value.trim === '') {
                    return false
                }
                return true
            },
            pattern(elem, pattern) {
                console.log(pattern)
                return pattern.test(elem.value)
            }
        };

        if (this.method) {
            const method = this.method[elem.type];
                 
                return method.every(item => {             
                return validatorMethod[item[0]](elem, this.pattern[item[1]]);
                })
            
        }

        

        return true;
    }

    chekIt(event) {
        const target = event.target;
        if (this.isValid(target)) {
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }

    

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        
        if (elem.nextElementSibling) {
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'ошибка ввода в поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
         console.log(elem.nextElementSibling)
         
    }

    showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
        
        if (elem.nextElementSibling) {
            elem.nextElementSibling.remove();
        }


    }

    applyStyle() {
        const style = document.createElement('style');
        style.textContent = `
        input.success {
            background-color: PaleGreen
        }
        input.error {
            background-color: red 
        }
        .validator-error {
            font-size: 14px;
            color: red;
        }
        `
        document.head.appendChild(style);
    }

    setPattern() {
        if (!this.pattern.tel) {
          this.pattern.tel = /^\+?[78]([-()]*\d){10}$/;  
        }

        if (!this.pattern.email) {
            this.pattern.email = /^\w+@\w+\.\w{2,}$/;  
        }

        if (!this.pattern.text) {
            this.pattern.text = /^[а-яА-Я]+$/;  
        }
        
        


    }
};