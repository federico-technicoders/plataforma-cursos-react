import { base_url } from "./config";

export const postRegister = async user => await fetch(`${base_url}api/sessions/register`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
})

export const postLogin = async user => await fetch(`${base_url}api/sessions/login`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
})