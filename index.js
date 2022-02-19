/*
BT JS buổi 7: Cho người dùng nhập vào số nguyên và lưu trữ trong mảng
1. Tổng các số dương trong mảng
2. Đếm có bao nhiêu số dương trong mảng
- 
*/
document.getElementById("add").addEventListener('click', ex1);
const numberss = [];


function ex1() {
    const number = +document.getElementById("number").value;
    numberss.push(number);

    document.getElementById("array").innerHTML = numberss;     
    let result1 = 0; // tong so duong
    let result2 = 0; // dem so duong
    let result2A = 0;    
    let result3 = numberss[0]; // 
    let result4 = numberss[0];
    let result5 = 0;
    let result5A = 0;
    let result8 = 0;
    let result8A = 0;
    let result9 = 0;
    let result10 = "";
    let result10A = 0;
    
    
    for(let i = 0; i < numberss.length; i++) {
        const value = numberss[i];
        // 1. và 2.        
        if(value > 0) {            
            result1 += value;
            result2++;
            result2A++;
        }
        // 3. Số nhỏ nhất:
        if(result3 > value) {
            result3 = value;
        }
        // 4. Số dương nhỏ nhất:
        if(value > 0 && result4 > value) {
            result4 = value;
        }
        // 5. Số chẵn cuối cùng trong Array:
        if(value % 2 === 0){
            result5A++;
        }        
        else if(result5A++ === 0) {
            result5 = -1;
        }        
        if(value % 2 === 0 && value === numberss[numberss.length-1]) {
            result5 = value;
        }        
                
        // 6. Đổi chỗ vị trí thứ 2 và 5 của mảng:
        const numS1 = numberss.map(function(value, index) {
            // Xử lý logic trả về dữ liệu mới cho array mới
            return value * 1;
        })
        if(numberss.length >= 5) {
            numS1.splice(1, 1, numberss[4]);
            numS1.splice(4, 1, numberss[1]);
        }        
        document.getElementById("result6").innerHTML = numS1;

        // 7. Mảng theo thứ tự tăng dần:
        const numsX1 = numberss.map(function(value, index) {
            // Xử lý logic trả về dữ liệu mới cho array mới
            return value * 1;
        })
        numsX1.sort(compareNumber);        

        function compareNumber(a, b) {
            // Nếu a - b > 0 => Đảo vị trí của a với b
            // Nếu a - b <= 0 => Không đảo vị trí của a với b
            return a - b; // bé tới lớn             
        }        
        document.getElementById("result7").innerHTML = numsX1;
        // 8. Số nguyên tố:
        function SNT(value) {
            if (value < 2) {
                return false;
            }        
            if (value === 2) {
                return true;
            }
            // Số chẵn khác 2 chắc chắn k phải SNT => return false
            if (value % 2 === 0) {
                return false;
            }
            // Từ 3 trở đi, ta chỉ cần kiểm tra số lẻ, vì số chẵn chác chắn không phải là SNT
            for(let i = 3; i <= value / 2; i += 2) {
                // Nếu n chia hết cho 1 số i nào => không phải SNT
                if (value % i === 0) {
                    return false; // Trong vòng for nếu return false => sé thoát ra khỏi vòng for/hàm
                }
            }        
            // Không chạy vào if trong vòng for => là SNT => return true
            return true;
        }
        if(SNT(value)) {
            result8 = value;
            result8A++;
        }
        else if(result8A++ === 0) {
            result8 = -1;
        }

        // 9.
        if(value <= (value + 0.0)) {
            result9 ++;
        }

        // 10. So sánh
        if(value < 0) {            
            result10A++;
        }
        if((result2A++) > (result10A++)) {
            result10 = "Số dương nhiều hơn";
        }
        else if((result2A++) === (result10A++)) {
            result10 = "Số dương bằng số âm";
        }
        else {
            result10 = "Số âm nhiều hơn";
        }
        
    }
    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = result3;
    document.getElementById("result4").innerHTML = result4;
    document.getElementById("result5").innerHTML = result5;
    document.getElementById("result8").innerHTML = result8;    
    document.getElementById("result9").innerHTML = result9;
    document.getElementById("result10").innerHTML = result10;
}


    