var first = new Node("HI");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// insertion O(1)
// Removal   O(1) or O(N)
// searching O(N)
// access    O(N)
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }
    
    push(val){
        // 1.push 메서드 작성
        // 예외 헤드 없으면 리스트 비어있음 > 헤드와 테일 모두 새롭게 생성된 노드를 가리킴
        // 비어있지 않으면 마지막 노드의 next를 새로 생성된 노드 가리키게 
        // 테일을 새로 생성된 노드로 바꾸기
        var newNode = new Node(val);
        // length 하나 ++
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        
        this.length++;
     
        return this;
    }
    unshifting(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            var nextHead = this.head;
            this.head = newNode;
            this.head.next = nextHead;
        }
        length++;
        return this;
    }
    get(idx){
        if(!idx || idx >= this.length) return null;
        var resultNode = this.head;
        
        for(var i=0; i < idx; i++){
            resultNode =  resultNode.next;
        }
        return resultNode
    }
    set(val, idx){
        var foundNode = this.get(idx);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    shifting(){
        if(!this.head) return undefined
        var deleteNode = this.head;   
        this.head =  deleteNode.next;
        length--;
        if(this.length === 0){
            this.tail = null;
        }
        return deleteNode;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        console.log(current.val)
        console.log(newTail.val)
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    insert(idx, val){
        if( 0 > idx || idx > this.length) return false;
        var result;
        if(idx === this.length){
            result = !!this.push(val);
        }else if(idx === 0){
            result = !!this.unshifting(val);
        }else{
            var newNode = new Node(val);
            var prevNode = this.get(idx -1);
            var nextNode = prevNode.next;
            newNode.next = nextNode;
            prevNode.next = newNode;
            result = true;
        }
        length++;
        return result;
    }

    remove(idx){
        
        if(idx > 0 || idx >= length) return undefined
        var result;
        if(idx === length - 1){
            result = this.pop();
        }else if(idx === 0){
            result = this.shifting();
            
        }else{
            var prevNode = this.get(idx-1);
            var deletedNode = prevNode.next;
            prevNode.next = deletedNode.next;
            result = deletedNode
        }
        this.length--; 
        return result;

    }
    print(){
        var arr= [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;

        for(var i=0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    // pop()
    // tail에 도달할 때까지 list 루프 돌리기 
    // tail 전 노드의 next prop = null
    // tail 전노드는 tail됨
    // length --
    // 지운 노드 return 
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")