const initialState = {
    "Roadmap":{
        id:0,
        columns:{
            "NOW":{
                id:0,
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
                        getCompletedTasks:function(){
                            return this.subtasks.filter((task)=>task.done).length
                        }
                    }
                ]
            },
            "LATER":{
                id:1,
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
                        getCompletedTasks:function(){
                            return this.subtasks.filter((task)=>task.done).length
                        }
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
                        getCompletedTasks:function(){
                            return this.subtasks.filter((task)=>task.done).length
                        }
                    }
                ]
            },
            "DOING":{
                id:1,
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
                        getCompletedTasks:function(){
                            return this.subtasks.filter((task)=>task.done).length
                        }
                    }
                ]
            },
            "FINISH":{
                id:2,
                cards:[
                    {
                        id:0,
                        title:"Write launch article to publish on multiple channels",
                        description:"No description",
                        subtasks:[
                            {
                                id:0,
                                title:"Write article",
                                done:false,
                            },
                            {
                                id:1,
                                title:"Publish on LinkedIn",
                                done:false,
                            },
                            {
                                id:2,
                                title:"Publish on Inndie Hackers",
                                done:false,
                            },
                            {
                                id:3,
                                title:"Publish on Medium",
                                done:false,
                            }
                        ],
                        getCompletedTasks:function(){
                            return this.subtasks.filter((task)=>task.done).length
                        }
                    }
                ]
            }
        }
    },
    selected:"Roadmap"
}

export default initialState