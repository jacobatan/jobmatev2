import Cookies from 'js-cookie';
const auth = Cookies.get();
const bearer = 'Bearer ' + auth.token;

interface iUseState {
  id?: string
  obj?: any;
  setMyVar: (value: any | ((prevVar: any) => any)) => void;
}



export async function GetAllJobs({ setMyVar }: iUseState) {
  try {
    const link = `${process.env.REACT_APP_API_LINK}/jobs`
    const resp = await fetch(link, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      },
    })
    const data = await resp.json();
    setMyVar(data.jobs)
  } catch (e) {
    console.log(e)
  }
}

export async function DeleteJob({ id, setMyVar }: iUseState) {
  try {
    const link = `${process.env.REACT_APP_API_LINK}/jobs/${id}`
    await fetch(link, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      },
    })
    GetAllJobs({ setMyVar: setMyVar })
  } catch (e) {
    console.log(e)
  }
}


export async function CreateJob({ setMyVar, obj }: iUseState) {
  try {
    const link = `${process.env.REACT_APP_API_LINK}/jobs`
    await fetch(link, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
    })
    GetAllJobs({ setMyVar: setMyVar })
  } catch (err) {
    console.log(err)
  }
}
