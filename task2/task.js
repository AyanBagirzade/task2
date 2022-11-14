
    

    class Mes{
        constructor(author,text){
            this.author=author;
            this.text=text
            this.time=new Date();
            }
             
            toString(){
                return `${this.time.getHours()}:${this.time.getMinutes()} ${this.author}:${this.text}`
            }
     }
     class Messanger{
        constructor(){
            this.messages=[]
        }
        
        show_history(){
            this.messages.forEach(item=>console.log(item))
        }
        send(author,text){
            const mess=new Mes(author,text)
            this.messages.push(mess.toString())
        }
     }
     const hello=new Messanger()
     hello.send('Fidan','hellooo')
     hello.send('Adelet','hiiiiii')
     hello.show_history()