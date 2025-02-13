module.exports = {
    components:{
        schemas:{
            User:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"23454234234xfsd23423df2"
                    },
                    title:{
                        type:'string',
                        description:"title task",
                        example:"Aprender swagger"
                    },
                    completed:{
                        type:'boolean',
                        description:"task completed or not",
                        example:"false"
                    },
                }
            },
            TaskId: {
                type: 'string',
                description: 'id task',
                example: '23454234234xfsd23423df2'
            }
        }
    }
}