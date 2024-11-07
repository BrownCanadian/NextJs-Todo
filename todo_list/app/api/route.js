import {ConnectDB} from '../../lib/config/db';
import {NextResponse} from 'next/server';
import TodoModel from '../../lib/config/models/TodoModel';
const LoadDb = async () => {
    await ConnectDB();
}
LoadDb();

export async function GET(request){
    return NextResponse.json({msg: 'Hello World!'});
}

export async function POST(request){
    const {title, desc} = await request.json();
    await TodoModel.create({title, desc});
    return NextResponse.json({msg:  'Todo Done'});
}
//a0i2Z2pWTPCvwGAn rushaanchawla