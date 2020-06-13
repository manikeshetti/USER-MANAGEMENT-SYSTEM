const controller={};

//list the users

controller.list1=(req,res)=>{
    req.getConnection((err,conn)=>{
            res.render('user')
            });
    
    };

    controller.list=(req,res)=>{
        req.getConnection((err,conn)=>{
            conn.query('SELECT * FROM users1',(err,user)=>{
                if(err){
                    res.json(err);
                }
                res.render('home',{
                    data:user
                });
            });
        });
    };
    

controller.save=(req,res)=>{
    const data=req.body;
    console.log(req.body)
    req.getConnection((err,connection)=>{
        const query=connection.query('INSERT INTO users1 set ?',data,(err,users)=>{
            if(err)
            {
                console.log(err);
            }
            else{
            console.log(users)
            }
            res.redirect('/');
        })
    })

};

controller.edit=(req,res)=>{
    const { id }=req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM users1 WHERE id = ?',[id],(err,rows)=>{
            res.render('users_edit',{
                data:rows[0]
            })
        });
    });
};

controller.update=(req,res)=>{
    const { id }=req.params;
    const newUser=req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE users1 set ? WHERE id = ?',[newUser,id],(err,rows)=>{
            res.redirect('/');
        });
    });
};

controller.delete=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query(`DELETE FROM users1 WHERE id = ${id}`,(err,rows)=>{
            console.log(res.affectedRows);
            res.redirect('/open');
        });
    });
}

module.exports=controller;