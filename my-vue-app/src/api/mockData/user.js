import Mock, { mock } from 'mockjs'

function param2obj(url) {
    const search = url.split('?')[1]
    if(!search){
        return{}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')+

        '"}'

    )
}

let List = []
const count = 200

for (let i = 0; i < count; i++){
    List.push(
        Mock.mock({
            id:Mock.Random.guid(),
            name: Mock.Random.cname(),
            addr: Mock.mock('@county(true)'),
            'age|18-60': 1,
            birth: Mock.Random.date(),
            sex: Mock.Random.integer(0,1)
        })
    )
}

export default{
    getUserList: config => {
        const {name, page = 1, limit = 10 } = param2obj(config.url)
        const mockList = List.filter(user =>{
            if(name && user.name.indexOf(name) === -1) return false
            return true
        })
        const pageList = mockList.filter((item,index)=> index<limit*page&&index>=limit * (page-1))
        return {
            code : 200,
            data: {
                list: pageList,
                count:mockList.length

            }
        }
    },

    deleteUser: config => {
        const {id} = param2obj(config.url)
        if (!id){
            return{
                code: -999,
                message: '参数不正确'
            }

        }else{
            List=List.filter(u=> u.id !==id)
            return{
                code:200,
                message:'删除成功'
            }
        }
    },

    createUser: config =>{
        const {name,addr,age,birth,sex} = JSON.parse(config.body)
        List.unshift({
            id: Mock.Random.guid(),
            name: name,
            addr: addr,
            age: age,
            birth: birth,
            sex: sex
        })
        return{
            code: 200,
            data: {
                message: '添加成功'
            }
        }
    },

    updateUser: (config) => {
        const {id,name,addr,age,birth,sex} = JSON.parse(config.body);
        const sex_num = parseInt(sex);
        List.some((u) =>{
            if(u.id === id){
                u.name = name;
                u.addr = addr;
                u.age = age;
                u.birth = birth;
                u.sex = sex_num;
                return true;
            }
        });
        return  {
            code: 200,
            data: {
                message: "编辑成功"
            },
        };
    },

}

