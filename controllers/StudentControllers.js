class StudentController {
    index(req, res){
        const data = {
            message: "Menampilkan data student",
            data: students,
        }; 

        res.json(data);
    }
    store(req, res){
        const { nama } = req.body;
        students.push(nama);//push arrray

        const data = {
            message: `Menambah data ${ nama }`,
            data: students,
        }; 

        res.json(data);
    }
    update(req, res){
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message: `mengedit data students ${ id }, nama ${ nama }`,
            data: [],
        }; 


        res.json(data);
    }
    destroy(req, res){
        const { id } = req.params;
        students.splice(id);//memisahkan sesuai id atau scaning id

        const data = {
            message: `hapus data students ${ id }`,
            data: students,
        }; 

        res.json(data);
    }
}

const students = require("../task/students");
const object = new StudentController();

module.exports = object;