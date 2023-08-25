export default{
    server:{
        proxy:{
            '/graphql':{
                target:'http://localhost:4007',
                changeOrigin:true },
        },
        fs:{
            strict:false,


    },

    historyAPIFallback:true,
    },
};
