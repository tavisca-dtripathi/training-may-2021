let employees = [
    {"EmployeeNo":101, "EmployeeName":"Ganesh", "DepartmentName":"IT", "Salary":40000},
    {"EmployeeNo":102, "EmployeeName":"Mahesh", "DepartmentName":"IT", "Salary":4000},
    {"EmployeeNo":103, "EmployeeName":"Ram", "DepartmentName":"IT", "Salary":40000},
    {"EmployeeNo":108, "EmployeeName":"Geeta", "DepartmentName":"IT", "Salary":40000},
    {"EmployeeNo":104, "EmployeeName":"Lakhan", "DepartmentName":"IT", "Salary":40000},
    {"EmployeeNo":107, "EmployeeName":"Sita", "DepartmentName":"IT", "Salary":40000},
    {"EmployeeNo":105, "EmployeeName":"Ramesh", "DepartmentName":"IT", "Salary":40000},
    {"EmployeeNo":106, "EmployeeName":"Raju", "DepartmentName":"IT", "Salary":38000},   
    {"EmployeeNo":119, "EmployeeName":"Bimal", "DepartmentName":"L&T", "Salary":25000},
    {"EmployeeNo":109, "EmployeeName":"Kamal", "DepartmentName":"L&T", "Salary":10000},
    {"EmployeeNo":129, "EmployeeName":"Alex", "DepartmentName":"Finance", "Salary":21000},
    {"EmployeeNo":159, "EmployeeName":"Adarsh", "DepartmentName":"It", "Salary":37000},
    {"EmployeeNo":149, "EmployeeName":"Shashank", "DepartmentName":"Management", "Salary":25000},
    {"EmployeeNo":110, "EmployeeName":"Anamika", "DepartmentName":"Recruitment", "Salary":20000},
    {"EmployeeNo":111, "EmployeeName":"Navneet", "DepartmentName":"Recruitment", "Salary":20000},
    {"EmployeeNo":112, "EmployeeName":"Ritika", "DepartmentName":"Management", "Salary":25000},
    {"EmployeeNo":113, "EmployeeName":"Ajit", "DepartmentName":"IT", "Salary":35000},
    {"EmployeeNo":114, "EmployeeName":"Rishabh", "DepartmentName":"Finance", "Salary":20000},
    {"EmployeeNo":115, "EmployeeName":"Deeksha", "DepartmentName":"IT", "Salary":34000},
    {"EmployeeNo":116, "EmployeeName":"Nikunj", "DepartmentName":"IT", "Salary":35000},
    {"EmployeeNo":117, "EmployeeName":"Nick", "DepartmentName":"HR", "Salary":21000},
    {"EmployeeNo":118, "EmployeeName":"Naruto", "DepartmentName":"Security", "Salary":25000},
    {"EmployeeNo":119, "EmployeeName":"Kageyama", "DepartmentName":"HealthCare", "Salary":20000},
    {"EmployeeNo":120, "EmployeeName":"Hinata", "DepartmentName":"HealthCare", "Salary":20000},
    {"EmployeeNo":121, "EmployeeName":"Saske", "DepartmentName":"Security", "Salary":25000},
];


function Print(input:Array<any>){
    input.forEach(function(x,y){
        console.log(`Employee at index ${y} = ${x.EmployeeName},${x.EmployeeNo},${x.DepartmentName},${x.Salary}`);
    });
}

function sortByName(employees:Array<any>) : Array<any>{
    return employees.sort( (a,b) => (a.EmployeeName > b.EmployeeName) ? 1 : (a.EmployeeName < b.EmployeeName) ? -1 : 0);
}


function groupByDepartment(employees:Array<any>, propertyName : string):Array<any>{

    return employees.reduce(
        (i,j)=>{
            if(!i[j.DepartmentName]){
                i[j.DepartmentName] = [];
            }

            i[j.DepartmentName].push(j);
            return i;
        },{}
    );
}

var sortedArray = sortByName(employees);
console.log(`Employees Sort by name in asending order`);
Print(sortedArray);

var departmentGroups = groupByDepartment(employees,"DepartmentName");
console.log(`Grouped By Department`);
console.log(departmentGroups);
