/*
BT JS buổi 7: Cho người dùng nhập vào số nguyên và lưu trữ trong mảng
1. Tổng các số dương trong mảng
2. Đếm có bao nhiêu số dương trong mảng
- 
*/
document.getElementById("add").addEventListener('click', ex1);
const numberss = [];


function ex1() {
    // Đầu tiên người dùng nhập mảng
    const number = +document.getElementById("number").value;
    numberss.push(number);

    document.getElementById("array").innerHTML = numberss;     
    
    // 1. Tổng các số dương
    let result1 = 0;     
    
    function setResult1(result1) {
        const resultEl = document.getElementById("result1");
        resultEl.style.display = "block";
        resultEl.innerHTML = `1. Tổng các số dương: ${result1}`;
    }
    document.getElementById("select-1").onclick = function () {            
        for(let i = 0; i <= numberss.length; i++) {
            const value = numberss[i];
                
            if(value > 0) {            
                result1 += value;          
            }        
        }
        setResult1(result1);
    };    
    
    // 2. Đếm các số dương
    let result2 = 0;     
    
    function setResult2(result2) {
        const resultEl = document.getElementById("result2");
        resultEl.style.display = "block";
        resultEl.innerHTML = `2. Đếm các số dương: ${result2}`;
    }
    document.getElementById("select-2").onclick = function () {       
        for(let i = 0; i <= numberss.length; i++) {
            const value = numberss[i];
                
            if(value > 0) {            
                result2 ++;          
            }        
        }
        setResult2(result2);
    };

    // 3. Số nhỏ nhất:
    let result3 = numberss[0];     
    
    function setResult3(result3) {
        const resultEl = document.getElementById("result3");
        resultEl.style.display = "block";
        resultEl.innerHTML = `3. Số nhỏ nhất: ${result3}`;
    }
    document.getElementById("select-3").onclick = function () {       
        for(let i = 0; i <= numberss.length; i++) {
            const value = numberss[i];
                
            if(result3 > value) {
                result3 = value;
            }        
        }
        setResult3(result3);
    };

    // 4. Số dương nhỏ nhất:
    let result4 = numberss[0];     
    
    function setResult4(result4) {
        const resultEl = document.getElementById("result4");
        resultEl.style.display = "block";
        resultEl.innerHTML = `4. Số dương nhỏ nhất: ${result4}`;
    }
    document.getElementById("select-4").onclick = function () {       
        for(let i = 0; i <= numberss.length; i++) {
            const value = numberss[i];
                
            if(value > 0 && result4 > value) {
                result4 = value;
            }        
        }
        setResult4(result4);
    };

    // 5. Số chẵn cuối cùng trong Array:
    let result5 = 0;
    let result5A = 0;     
    
    function setResult5(result5) {
        const resultEl = document.getElementById("result5");
        resultEl.style.display = "block";
        resultEl.innerHTML = `5. Số chẵn cuối cùng trong Array: ${result5}`;
    }
    document.getElementById("select-5").onclick = function () {       
        for(let i = 0; i <= numberss.length; i++) {
            const value = numberss[i];
            
            function SN(n) {
                if (n % 2 === 0) {
                    return true;
                }  
            }
                               
            if(SN(value)) {
                result5 = value;
                result5A++;
            }
            else if(result5A++ === 0) {
                result5 = -1;
            }        
        }
        setResult5(result5);
    };

    // 6. Đổi chỗ vị trí thứ 2 và 5 của mảng:    
    function setResult6(result6) {
        const resultEl = document.getElementById("result6");
        resultEl.style.display = "block";
        resultEl.innerHTML = `6. Đổi chỗ vị trí thứ x và n của mảng: ${result6}`;
    }
    document.getElementById("select-6").onclick = function () {
        const soX = +document.getElementById('input1').value;
        const soN = +document.getElementById('input2').value;
        const numS1 = numberss.map(item => item);
            
        if(numberss.length >= 2) {
            numS1.splice((soX-1), 1, numberss[soN-1]);
            numS1.splice((soN-1), 1, numberss[soX-1]);
        }
        setResult6(numS1);
        
    };

    // 7. Mảng theo thứ tự tăng dần:    
    function setResult7(result7) {
        const resultEl = document.getElementById("result7");
        resultEl.style.display = "block";
        resultEl.innerHTML = `7. Mảng theo thứ tự tăng dần: ${result7}`;
    }
    document.getElementById("select-7").onclick = function () {       
        const numS2 = numberss.map(item => item);
        numS2.sort(compareNumber);        

        function compareNumber(a, b) {            
            return a - b; // bé tới lớn             
        }
        setResult7(numS2);
    };

    // 8. Số nguyên tố:
    let result8 = 0;
    let result8A = 0;        
    
    function setResult8(result8) {
        const resultEl = document.getElementById("result8");
        resultEl.style.display = "block";
        resultEl.innerHTML = `8. Số nguyên tố: ${result8}`;
    }
    document.getElementById("select-8").onclick = function () {
        const numS3 = numberss.map(item => item);

        for(let i = 0; i <= numS3.length; i++) {
            const value = numS3[i];
                
            function SNT(n) {
                if (n < 2) {
                    return false;
                }        
                if (n === 2) {
                    return true;
                }
                // Số chẵn khác 2 chắc chắn k phải SNT => return false
                if (n % 2 === 0) {
                    return false;
                }
                // Từ 3 trở đi, ta chỉ cần kiểm tra số lẻ, vì số chẵn chác chắn không phải là SNT
                for(let i = 3; i <= n / 2; i += 2) {
                    // Nếu n chia hết cho 1 số i nào => không phải SNT
                    if (n % i === 0) {
                        return false; // Trong vòng for nếu return false => sé thoát ra khỏi vòng for/hàm
                    }
                }        
                // Không chạy vào if trong vòng for => là SNT => return true
                return true;
            }
            if(value === SNT(value)) {
                result8 = value;
                result8A++;
            }
            else if(result8A++ === 0) {
                result8 = -1;
            }        
        }
        setResult8(result8);
    };

    // 10. So sánh âm dương:
    let result10 = "";
    let result10A = 0;
    let result10B = 0;     
    
    function setResult10(result10) {
        const resultEl = document.getElementById("result10");
        resultEl.style.display = "block";
        resultEl.innerHTML = `10. So sánh âm dương: ${result10}`;
    }
    document.getElementById("select-10").onclick = function () {       
        for(let i = 0; i <= numberss.length; i++) {
            const value = numberss[i];
                
            if(value < 0) {            
                result10A++;
            }
            if(value > 0) {            
                result10B++;
            }
            if((result10B++) > (result10A++)) {
                result10 = "Số dương nhiều hơn";
            }
            else if((result10B++) < (result10A++)) {
                result10 = "Số âm nhiều hơn";
            }
            else {
                result10 = "Số dương bằng số âm";
            }        
        }
        setResult10(result10);
    };

}


    