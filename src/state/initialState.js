const initialState = {
    "Roadmap":{
        id:0,
        columns:{
            "NOW":{
                id:0,
                color:'#A98307',
                cards:[
                    {
                        id:0,
                        title:"Review early feedback and plan next steps for roadmap",
                        description:"Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
                        subtasks:[
                            {
                                id:0,
                                title:"Interview 10 customers",
                                done:true,
                            },
                            {
                                id:1,
                                title:"Review common customer pain points and suggestions",
                                done:false,
                            },
                            {
                                id:2,
                                title:"Outline next steps for our roadmap",
                                done:false,
                            }
                        ],
                    },
                ]
            },
            "LATER":{
                id:1,
                color:'#316650',
                cards:[
                    {
                        id:0,
                        title:"Launch version one",
                        description:"No description",
                        subtasks:[
                            {
                                id:0,
                                title:"Launch privately to our waitlist",
                                done:true,
                            },
                            {
                                id:1,
                                title:"Launch privately to our waitlist",
                                done:false,
                            }
                        ],
                    }
                ]
            }
        }
    },
    "Marketing Plan":{
        id:1,
        columns:{
            "TODO":{
                id:0,
                color:'#C7B446',
                cards:[
                    {
                        id:0,
                        title:"Plan Product Hunt launch",
                        description:"No description",
                        subtasks:[
                            {
                                id:0,
                                title:"Find hunter",
                                done:false,
                            },
                            {
                                id:1,
                                title:"Gather assets",
                                done:false,
                            },
                            {
                                id:2,
                                title:"Draft product page",
                                done:true,
                            },
                            {
                                id:3,
                                title:"Notify customers",
                                done:false,
                            },
                            {
                                id:4,
                                title:"Notify network",
                                done:false,
                            },
                            {
                                id:5,
                                title:"Launch!",
                                done:false,
                            }
                        ],
                    }
                ]
            },
            "DOING":{
                id:1,
                color:'#474A51',
                cards:[
                    {
                        id:0,
                        title:"Share on Show HN",
                        description:"No description",
                        subtasks:[
                            {
                                id:0,
                                title:"Draft out HN post",
                                done:false,
                            },
                            {
                                id:1,
                                title:"Get feedback and refine",
                                done:false,
                            },
                            {
                                id:2,
                                title:"Publish post",
                                done:false,
                            }
                        ],
                    }
                ]
            },
            "FINISH":{
                id:2,
                color:'#231A24',
                cards:[]
            }
        }
    },
}

Object.defineProperty(initialState,'selected',{
    value:"Roadmap",
    writable:true,
    enumerable:false,
})

export default initialState