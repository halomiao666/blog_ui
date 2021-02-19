import myPlatformService from './config'

export default {
    login(params) {
        return myPlatformService({
            method: 'post',
            url: 'admin/login',
            params: params
        })
    },
    getAllUsers() {
        return myPlatformService({
            method: 'get',
            url: 'users/get',
        })
    },
    getBlogList() {
        return myPlatformService({
            method: 'get',
            url: 'blogs/get',
        })
    },
    getBlogDetail(url) {
        return myPlatformService({
            method: 'get',
            url,
        })
    },
    getBlockList(url) {
        return myPlatformService({
            method: 'get',
            url,
        })
    }

}