//这个鉴权会在服务端开始
export default function({store, redirect, route}){
	if(!store.state.authUser){
		return redirect('/login?redirect='+route.fullPath)
	}
}