import React, { useState} from 'react'



function SignUp() {

    //variables 
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [role, setRole]= useState('')

    const newUser = {name,email,password,role }

    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then (res=>res.json())
        .then (data => {
            console.log(data)
            setName('')
            setEmail('')
            setPassword('')
            setRole('')
        })
        .catch (err =>console.error(err))
    }




    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right,rgb(9, 2, 18),rgb(3, 14, 26))",
        fontFamily: "'Poppins', Arial, sans-serif"
      }}>
        <div style={{
          maxWidth: "450px",
          width: "100%",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}>
          
          <img 
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQMECAL/xAA9EAABAwMDAQYEAwUGBwAAAAABAgMEAAURBhIhMQcTIkFRcRRhgZEjMqEzUmKxwRZCQ3KC0RU0hJLC4fD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBQT/xAAmEQEAAgIBAwIHAQAAAAAAAAAAAQIDEQQSITFBoRMyQlFxgcEi/9oADAMBAAIRAxEAPwC8aUpQKUpQKUpQKUpQKUpQKVgms5oFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFcUh5Edh153hDaCtXsBXLWo1W483py4rjglwMnoMnb/eIHrjNBWErV3aVewm5actDMe1OrAjJWEqWtHktWTnH08/rUv7O9WXW9Ll2vUtu+BvENKVrCRhLqCSAoDy5BHWtRbJdxtFo+HtRtJtsWCBGU68vvO8TgKKxj8u4nOORis6PExOuFuy1sPTH4m2YuNktADlOCQMHxDjHnQWaKVgdOKzQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUqtdZdo1rNxRpu2y1rfdc2S5Uc4DCBytKVeayARx0z1zQS646v0/bXHW5dzYStn9qlBK+7/AM23O361CdT65lS7e8uEtm3wnkhtgu+OVL3ghO1v/DSeuVZOB0FbCzuW+46ZYQ4ILKZrK1RYZbBTHRt4KgcZVjBJPnxXT0rpDTpR+FDtMttAxvwX3ifVTpOM59BgeVBTM2/O21xMKRFZnpjr2oMvJUhGfG1jPB3ZyevA+VSzRGorgxcv+JJuKGHZxEcGUguMJI5Q0pWc5248XXkda7/aTpe2NT4Asj8aMtc5BksLe/ZqPReFZwPbj5VObfpDTC7XmNChzEnKy++C+la/NXJH6YoO/a9f21eI95BgTgnd3acvNup/fbWkeJH2I6GpPb7hDucZMm3ymZLB4DjKwoZ9OPP5VXOnrPp+0XOdcGzbEBKAHRHVlLZzwtKSSWj684PB4wa6moNVM6Uvz87al5yOWy6uOQn4yMvIwodC4hXIV6ceZoLbpWo03qO16ltyJ9nlJfZPChjCkH0UD0NbYHIoM0pSgUpSgUpSgUpSgUpSgUrBOKhnarqtel9NKMMj/iM1XcRR+6T1X9B+uKJiJntCIdqevH5Mt/TGnJBRtymfMQr8nkW0n165P09a12jNGWm7aSajpUEPynHHXloSO8IQvahCVHoM8nHU8eRqCwojqWBGiFTkt0ncc+JSsEq59cA1PddIkaYkWVWm1dzHiMlC0Y3Kx4ievVXiUfc1jjtN5mfR0ebx8fGxUx/XPef5CMas0ZO0+0pIvBfjoQn4mM2Vfhp4/DCifFwemAOnFTrSnaPaY9kREcDW5scpbWlJ9wD1FVlqjVqXohtMZEj9vvmPSMd44sHnPzzn5Cu3bFfG24zmjGVFbujSn1PNna2CgAKIPUZIHXqfnWzmuTtH1TbbvcYaoqZSgy8lxYek95gDqE5Ktv8AL5GrD032kWSPAR/zRUhPiVJmBY+5JwPkBWl1JdIpj2ZCNRWYbJ7SiiJbtqUHH5leLrj2r41S6i5z7a3b7hZbjJMxCx8LF7lYxkqUpWT0SDn5UGh1Zdlaw1M2uxvpYfG78VokAjHOcdenA8/F9ZRYOzhuKEXeXdUze6b3tOKbyglOdza2ySMYyOPnwCKrOZezbLsh6GtJfiy3VnCCkHKjnOfX2/2qQyNTzbowpvT3xMdmW+FPtOJBaStJTyj0JynI6YoOWa89ojW1wmaTcCWGnBviZOxxtSQooPsScH0wavjSeo4OqLIzc7co7F8ONqPiaWOqT8x/saqPtCtTUIWi5RUeNcZLU5zPhJSEJRn+LnHtWo7PtQ/2U1Y3uVi1XJaWZKfJtf8AdXj3P2JrGLzF+mf06V+NTJxIz4/MdrR/Xoys1gGs1s5pSlKBSlKBSlKDBNYKwOpA96rXtX1+5pm5W+1RY5fckNlx1IdLZwTtSNw5HO48c8CqjuOuLjMhy21RorgTJBDjyS+rlRISCsnCcJIwOooPSy75a0rKBPjrcT1Q2veofQZNUF2m6iRqHV3xMZa12uG2I8V3Ydjjh5XtJGM+WP4RWhman1NJmOPPT5CErifjFpOxBAQpSUceWVdPnXUs067MQxLmtSHtOKWIshsk90Bx+UeSk9QQOvvUWjcaaYcnw8kX+ztabuRja5sQCgkIlISSoZGV+HJ+XNWZq2/2y5fERX3WW3ITiitW8YU3nOU+eeFJNUpcorlvv70d496pp4YVj9ongpI9xg/WphO0HqWbtcjWZTbG05K3G0knOOhVnrx0qkf41WIeq+uR15rW1PpCC3eUJ10lzEo2JfeW4E+mSTW1tc9+Bbyww++01IQlbyUqylZ7wgZSQR5Dnita/bJUWcuHOaVGeaOHUvDbs/8Av1ruOOR47KExpCXlI52qRlIPqM8j6VabanTz1w2tWbR4hLLjqi6SLNanJU9bhS6VxyiM0CFtnHjyfF06iuCVqu73Z+PPkXJaHUgttqZZbaCMj5ZwTkc5z5e+hF2TIt8eIuEjcwVKbV8TtG5RySUnk+fnX2jv0MpSlUVpIOUnfvI6YwCT6Ck2iPJjwZMnyw010SETVjByUpUcqKuSkE8nryTUz7Op8MsfByVNtOMOqeClqwFoUACPcEJNRq52x8AP8uEjxHr+v9K72ndHX69x1S7XblutA4QtZSgLx127iM/+qVtExuE5ONkw36MkaWN2manYumge9grQht+ehCEcFe0DcFE54ztz9U1W6nUzIXJ/agAeZ3fID51z6xtE+yxYjNygKiurJzu2kKwAeCCfUVixCZCtTTlvQtd2uLimYO3G5pscLcSfIk+EHjACqp09cRMvTGWOJNqUnqiYX72c6yiXLS0RNykFq4xGwzMQ6kgoUngKVxgZAzzjrUwiT4kxO6JKYfHn3TgVj7V5Mh3PUMCbPbEqWzcWWtjmVEuK2rA2q67sBSq2TGqr2h2zsPpZkoaTtYTKipXtJyjbyM4zj7CtXPeqs+vFZrzXae1a5W5h2V8GFlT+UhMpza3wDt2kkbSQfbJxXou2zGrjb402OcsyGkuoz6KAI/nQdmlKUClKUFW6z0kzf9S3i5vp3O2+M0WhnGMJUr+dYgaBtbE20pLTeyW0VKyPzLCM5/U1JNQ3ONYb+89OwI1yghvJ6b2lKzn3S6P+2ocrX9vZj2hgOIXMtyuADkrTtIyB/EjBHvQfep7JbWdCah7tTSZLC3xjcArCScce2KrqNDt1x0HbDLlqZVGEjalsbiFKeQFKKR+bCD048/Spv2fW7S2trlqGfd4saTIenlbCHHML7vaCSEg5I+lSeJpDs0nTjBhxLY/LSCVMNPlS0gYzkbuPL70FK3VWne7hS337pIcEdKGHG2W20rDfhBUConqMHpVrntTsnwra3JsMb20fhhC1KSCknBx55GPcivrTOjtDzrpeba7borsyJMcAY3K3NtZG3z6c18WDSOhbner+WbbGehwlttpAUrCFBJ3jr6ihpVGpNT2iZepkhNljXFK3ctyJL0hBKcDgISsADOcCuh/aiOk/haYsKU/xMOLP6rq8ndN9mrVoi3Y2dpUCUoJafSlwgkq2gHnjJrX3jSug7ZrS1QJVsYQzNjOIbbSpRCnt6AnPPHBNE6lT41Zxxp3Tw/6HP/lRWrN/5tO6fV8/hCMfZVWj2i9ntgsc2zXqPBDNnZkJRc2U7lDuyeF9c48j7iu7rzTWgrNo2RcW7W1HdlxlCC4AvPeFBKPPj60NyqI6qiuYEnTlsUB5NOyGh9kuVYOge0KyWu1IiuuNwlqdV+A4lxxLaSraAlZJ42nPJ8jUmRY+zROnGL6uzIVbljBkJbcIBBwSrB45HXpXQ1VpDRs/Qrly0vAjtuSHWW48kFXh3PIQTgn5mo7R4TabW8yjHaRqzT+pHLa1NdecaYbUvvLcEnClYwFb/QDp7VpZFtssybFiu3CY2mNDKAy4wlvu07FLSsrCiCSojjzJxxVmRNIdnVhMOy3tpt25rwgOSkuIVIWTjw+RGTgYqNvdlENjX7saTMKbCywmcsHJWG9xT3efTI/N6VKJjTg0zFj3TtpnIcUgthrJwRhSglsH9c1NbhpW3KgXl8NBKmJYbYJHTlGMf6jWF6J0Te4T40a/Cj3VgBxiTCk71MrB8JIBPBIxUbtnaE0bUq23YJakMS985WfCVhzJwfmoDHtRDbTezG3P3RFuS2nYqP36kpOPEDtz+v6VPdBN9xpC1sZJDTPdpJ9ASB+gFRSNr+3LnzrmFpXmMluMhJyV7dxOPM5Wdv8Apqd2CEq3WO3wlkFbEdCFkeagkZP3zQbClKUClKUET7TNLf2t0tIhNAfGNfjRFEgfiDyz5ZGR9a8vvIlxJLcR9h5m5w192GlIO7rkDHyJPuDXsyuIsMlZcLTe8/3tozQecux7No14uTOiyIrRgurCHGlA4KkjjPUZrZ9oVtbty7rrGx3S5sTZD6UnCA2jas4IBByfyipJqSa3du0GS/CDimLfbVwpDpRhKXu8CtgJ6nHpVZdqbFyYvRfkTFOQJaiqO0H1KCAkJBBT0HJomJbzsTvMiPfL3cHyqU+4wgLU4o5USsck1A9RyX29SXlLbriErnPFSULIB8Z61YPZbZwxYXbq2HVuTMoXkANthC89fXj1qK62i2xjXCe6UkxX1tvSsO94Apasr5FDU+UwvU95XYpGgEI7lEVhYIHOS9Vf6AUUa0s6hwRKSR71ZUjUej2YwgPSob0BLYbTGbZdcTtByBnHXPqagfZ/cINnuEmTc4ri1dyO4cRGS8ppe4HcAojBxkZqNwtGO09ohcs/UztyLljuPduJkxC4tooADre4pWnPkRwQff0qJdrcpbmj40Tvg7HiSGm2VbAngNkf0rSal1jDcat8i1RpQuEWWhxt6TDbby3he5vcFKJCiocdK4tZ6kgXe0Nw4cS4IcMhLxRIYSAEgHIBCiT19BTqhacN/slulbi0z2ZxIdy+GNr+GW4+H2lqGO8V+5z6VW+oZkCDqhq4adbAtqFNOoS2lxtpxScEgb+cZFTw6t0iqMYvftMxFILYiOQXEICSckYSD5+dfF21JY42m3m7ZMguIY7ksQmlKAVteQsgBX+rmnZTpmIbi43LTnaE7b57yErkoSAyhq4dw80on8u0/wB7cOCPliupom4q0nrqRGvE6VOauURItz0h3cpQCye7JPRWdw9CfcV9tQ7RqmRa73HDjzsZxL7YYUhLnCwrY4nBOQRj+VdWazYL3qMWyeUyJUOHwlt1SShQcUpYBHVQTjP19DU9jRIsU3T7tzuujb1LauUhRdchvxkgODcVFIPPI5x61U8hcqQyqQ+26lmU+XXpJQQlaucgHGOOePU1cOmYF3tsmeifclS4S5DZhJVKU6UJ3K8jyDjbmpl2TNIXYLm24hK0i7ysJUMgeOiJVZ2QaRkaj1Mze5UdSLRAILRUPC4tPCUjPXHUn1HrXo+vlCEtpCUJSlI6BIwBX1RBSlKBSlKBQ9KUoPOd/wBZMae1JqSGq3rlPrui3UnvdiMbQOeCT08se9QbUeo52pXmFSm47SWAoNNsJKUpz15JJJOByTXrO52Cz3YYudrhy/m8wlR+5FQ+49jejJS97MJ+IonJ7iQrH2UT+lE79HnFhDO9luVICmskltJJCTj+p9PvXfIZYkOxmLetchBwptSNpHHmDzXpmwdn2lrBtXAtDBeH+M/+KvPyKs4+mK6ut+zyz6qHxDgVEuSRhExjhXsodFD3+9UtTfq9WLlfD7dMa9/d56bE1CdwhhASBkOLGE4HkByK1cu4yApQJGS3sON3r1586sWRpnV2jZzcqRbE3iMyrcl6LlWR5bk4yDznofrWue1Fpe6srE62BE1T4K1qG3ajcMp6/ujHTrWERave0OrkvgzRFcGSY/OvPsgrt0ecbQgob8BScgHOU9POuRu7vJJKWWRnOQAfPn1qWsQ9JPXRan1IZgHdtAK1KT+7nA8/lXazoaFsc7pT5Qs7kc5KfF6lI/cPXPBzipi9Z+lnbj8jHbc5fsi8Z6ZJbIaQy5hJ2jJBBOemfesq79O9c+ES2GwMgJUAR1JqVN3p69NSLXpWwvyW1u7khtHha5yBny8+Sen0qV6Z7IZc51EnWcpPdDkW+K4eR/GsdPYfela3m3jstk5ODHi+eZv+tftTspMJUQOIaU2tQ/DcKCAog4OPI4rrtOvW+YzMgyB3jLiVNuoOCFDpxXr9Wn7Ou2t21y2RFwm07UR1MpKEj5AiupaNG6bszhcttlhsOkk94GwpQz5BRyQPl0reK6cfJm+J5rEfhS+nLjrnUI+Gh2FppbvhTclMLaSz6q5O0nHTA61dekNOxdL2Vm2RFuOBJK3XXDlTjh/Mo+9bkJAGB0rOKsymds0pSiClKUClKUClKUClKUCsGs0oMYrWXOw2i6gm5WyJKOMbnWEqP3xmtpSgiK+zXRyyCdPxB/lBH9a7MTQelYbgcj2CAlQ81MhX881JaUHEyy2w0GmWkNtpHCUJAA+grkArNKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKD/2Q==" 
          alt="Login logo"
          style={{ width: "100%", borderRadius: "20px", marginBottom: "30px", maxHeight: "250px", objectFit: "cover" }}
        />

          <h2 style={{ margiTop: "19px", color: "#333" }}>Signup</h2>
  
          <form onSubmit={handleSubmit}>
            <input
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            /><br />
  
            <input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              style={inputStyle}
            /><br />
  
            <input
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              style={inputStyle}
            /><br />
  
            <input
              placeholder='Role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              style={inputStyle}
            /><br />
  
            <button type='submit' style={buttonStyle}>SignUp</button>
          </form>
        </div>
      </div>
    );
  }
  

  const inputStyle = {
    width: "100%",
    padding: "19px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px"
  };
  
  const buttonStyle = {
    width: "100%",
    padding: "19px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "10px"
  };
  
export default SignUp;

  
  
  
  
  
  
  
  
  
 
  