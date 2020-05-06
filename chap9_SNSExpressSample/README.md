# SNS Service Sample Code
using Express framework

## Project Structure
DB로 mysql을 사용하기 위해 아래와 같이 package를 다운받는다.
``` shell script
npm i -g sequelize-cli
npm i sequelize mysql2
sequelize init
```
그리고 express를 위해 필요한 패키지를 설치한다.
```shell script
npm i express cookie-parser express-session morgan connect-flash ejs
npm i -g nodemon
npm i -D nodemon
```
cookie-parser와 express-session의 비밀키를 하드코딩하는 경우, 코드를 공유했을 때에 키가 유출될 수 있으므로 다른 방식을 취한다. 
이를 위해서는 `dotenv`를 사용한다.
비밀 키는 `.env` 파일에 생성한다.
```shell script
npm i dotenv
```
.env 파일을 생성하여 아래와 같이 키를 만든다. 그러면 `dotenv`에서 해당 파일을 읽어 process.env 객체를 생성한다.
```shell script
COOKIE_SECRET=key information
```
생성한 객체를 아래와 같이 읽어서 사용하면 된다.
```js
require('dotenv').config();
app.use(cookieParser(process.env.COOKIE_SECRET));
```