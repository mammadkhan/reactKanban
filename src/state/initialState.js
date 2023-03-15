const initialState = [
    {
        id:'4893d919-262e-4b99-9bd8-685bdeb50dfb',
        title:"Roadmap",
        columns:[
            {
                id:'ae7a091a-8291-4a00-8000-f05fbcfae53a',
                title:"NOW",
                color:'#A98307',
                cards:[
                    {
                        id:"fab09e9f-df7a-4a6c-aebb-ad95d85c5a56",
                        title:"Review early feedback and plan next steps for roadmap",
                        description:"Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
                        subtasks:[
                            {
                                id:'5ca6909b-a3f8-4c55-8ffe-af2d5aba806c',
                                title:"Interview 10 customers",
                                done:true,
                            },
                            {
                                id:'7f5a8c20-26d2-40d4-acf1-a924110344a3',
                                title:"Review common customer pain points and suggestions",
                                done:false,
                            },
                            {
                                id:'92e1c1b0-c686-4f4e-9343-380606989a22',
                                title:"Outline next steps for our roadmap",
                                done:false,
                            }
                        ],
                    },
                ]
            },
            {
                id:"26e4e897-4835-4f30-9143-6825128254db",
                title:"LATER",
                color:'#316650',
                cards:[
                    {
                        id:"94d3943d-e739-4f4c-b5d9-f54bd89cbc46",
                        title:"Launch version one",
                        description:"No description",
                        subtasks:[
                            {
                                id:'e96147b4-7b80-44ff-a339-83367e4ad80f',
                                title:"Launch privately to our waitlist",
                                done:true,
                            },
                            {
                                id:'8c50f89c-a0a5-4a3a-a731-c157d75c1d4c',
                                title:"Launch privately to our waitlist",
                                done:false,
                            }
                        ],
                    }
                ]
            },
        ]
    },
    {
        id:"68f165bd-d1ab-4b7f-921a-758c7fd9b008",
        title:"Marketing Plan",
        columns:[
            {
                id:'c61fd398-3463-4e24-b419-c29357cd2eb5',
                title:"TODO",
                color:'#C7B446',
                cards:[
                    {
                        id:'f7c5d516-379d-4147-a829-7badda3f2b02',
                        title:"Plan Product Hunt launch",
                        description:"No description",
                        subtasks:[
                            {
                                id:'90bac543-c861-4339-a431-96a9a7893962',
                                title:"Find hunter",
                                done:false,
                            },
                            {
                                id:'ab5af65a-a2cd-425f-ada5-46228dfe868f',
                                title:"Gather assets",
                                done:false,
                            },
                            {
                                id:'498cb584-a0c1-4748-ae70-e9fa6d5b9268',
                                title:"Draft product page",
                                done:true,
                            },
                            {
                                id:'ec0b56c9-ad71-405e-87bb-8fa0ae69b68a',
                                title:"Notify customers",
                                done:false,
                            },
                            {
                                id:'a6a277e0-26bb-4211-989f-9d77c7815b5b',
                                title:"Notify network",
                                done:false,
                            },
                            {
                                id:'88b9da73-3299-4d87-a7a6-89183d21105e',
                                title:"Launch!",
                                done:false,
                            }
                        ],
                    }
                ]
            },
            {
                id:'c067efd6-c60b-489a-9ea0-23793a0e1ff5',
                title:"DOING",
                color:'#474A51',
                cards:[
                    {
                        id:'3e96be5c-9342-4f89-a198-6d4235a7fbf9',
                        title:"Share on Show HN",
                        description:"No description",
                        subtasks:[
                            {
                                id:'124b9958-2140-429a-9bfc-9c6be5ce2bc0',
                                title:"Draft out HN post",
                                done:false,
                            },
                            {
                                id:'206b898c-1367-4a91-9e14-d34c99ead87c',
                                title:"Get feedback and refine",
                                done:false,
                            },
                            {
                                id:'ef84bdcc-f48b-413f-8188-65aba17a0125',
                                title:"Publish post",
                                done:false,
                            }
                        ],
                    }
                ]
            },
            {
                id:'36c4fa58-b6b4-4b82-8aec-c0b7c0212779',
                title:"FINISH",
                color:'#231A24',
                cards:[]
            }
        ]
    },
]

Object.defineProperty(initialState,'selected',{
    value:0,
    writable:true,
    enumerable:false,
})

export default initialState