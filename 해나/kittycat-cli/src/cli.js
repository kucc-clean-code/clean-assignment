class cli {
	constructor() {
		// 상속받은 EventEmiitter 를 쓰기 위해 super 사용
		super();
		// 1. readline 선언
		this.readline = require('readline');
		this.stdio = this.readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		this.stdio.setPrompt('> ');
		// 2. 필요한 객체들을 받는다.
		this.orderQueue = new OrderQueue();
		this.dashBoard = new DashBoard(this);
		this.cashier = new Cashier(this.orderQueue, this.dashBoard);
		this.manager = new Manager(this.orderQueue, this.dashBoard);

		this.on('cafeoff', () => {
			console.log("모든 주문을 완료했습니다. 3초 뒤에 카페를 닫습니다.");
			setTimeout(_ => { process.exit() }, 3000);
		});

		// 3. 프로그램 시작
		console.log("> 바리스타 인원수를 지정해주세요. ");
		this.stdio.prompt();
		this.stdio.on('line', (command) => {
			this.stdio.removeAllListeners();		// listener 삭제함. 왜? 이전에 readline 을 없애고, 새로운 입력을 받는 this.readOrder() 를 사용하기 위해
			let baristaCount = parseInt(command);	// 바리스타 수 입력 받고 
			this.manager.setupBarista(baristaCount);	// 바리스타 셋팅하고, 이후에 주문 받는 것!

			console.log(`오늘 출근한 바리스타는 총 ${baristaCount}명입니다.`);
			console.log("> 메뉴  =  1. 아메리카노(3s)    2. 카페라떼(5s)    3. 프라프치노(10s)");
			console.log("> 고객별로 주문할 음료 개수를 입력하세요. 예) A고객, 아메리카노 2개, 프라프치노 1개 => A, 1:2, 3:1");
			this.readOrder(); // 한줄을 읽을때마다 이벤트가 발생해 cashier 에게 이벤트를 전달해 줌.
		});
	}

module.exports = { cli };
