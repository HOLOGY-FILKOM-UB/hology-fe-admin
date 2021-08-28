import jwtDecode from "jwt-decode";

export const StoreJwt = (jwtToken) => {
    const decodedJwt = jwtDecode(jwtToken)
    console.log('Decoded JWT:', decodedJwt)
    localStorage.setItem("h0_ni128ehiond1289n", jwtToken)
    localStorage.setItem("h0_s7yf8q7g398fh924", JSON.stringify(decodedJwt.admin)) //User Data
    localStorage.setItem("h0_sd8h28jedf", JSON.stringify(decodedJwt.exp)) //Expire
    localStorage.setItem("h0_sd8h28jeas6das6d8ddf", JSON.stringify(decodedJwt.admin.admin_role)) //Role
}

export const clearJwt = () => {
    localStorage.clear()
}