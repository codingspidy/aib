import React, { useEffect } from 'react'

const Webmail = () => {
    // useEffect(
    //     () => {
    //         var init = function () {
    //             document.getElementById("user")!.value = '';
    //             document.getElementById("pass")!.value = '';
    //             document.getElementById("user")!.focus();
    //         };
    //         if (window.addEventListener) {
    //             window.addEventListener('load', init, false);
    //         } else if (document.addEventListener) {
    //             document.addEventListener('load', init, false);
    //         }
    //     }
    // )
    return (
        <div id="content-wrap"><form action="https://server540.iseencloud.net:2096/" method="post"> <input name="login_theme" type="hidden" value="cpanel" />
            <table className="login" style={{ width: "200px", }} border={0} cellSpacing={0} cellPadding={0}>
                <tbody >
                    <tr >
                        <td ><strong>Login</strong></td>
                        <td >&nbsp;</td>
                    </tr>
                    <tr >
                        <td className="login_lines" >Email:</td>
                        <td className="login_lines" ><input id="user" name="user" size={16} type="text" tabIndex={1} /></td>
                    </tr>
                    <tr className="row2" >
                        <td className="login_lines" >Password:</td>
                        <td className="login_lines" ><input id="pass" name="pass" size={16} type="password" tabIndex={2} /></td>
                    </tr>
                    <tr >
                        <td colSpan={2}><input id="login" className="input-button" type="submit" value="Login" tabIndex={3} /></td>
                    </tr>
                </tbody>
            </table>
            <input name="goto_uri" type="hidden" value="/?login_theme=cpanel" /> </form> <br /> <br />
        </div>
    )
}

export default Webmail
