import {ConnectDB} from '../../lib/config/db';
import {NextResponse} from 'next/server';
import TodoModel from '../../lib/config/models/TodoModel';
const LoadDb = async () => {
    await ConnectDB();
}
LoadDb();

export async function GET(request){
    const todo = await TodoModel.find({});
    return NextResponse.json({todos:todo});
}

export async function DELETE(request){
    const mongoId = request.nextUrl.searchParams.get('mongoId');
    if (!mongoId) {
        return NextResponse.json({msg: 'No ID provided'}, {status: 400});
    }
    const deletedTodo = await TodoModel.findByIdAndDelete(mongoId);
    if (!deletedTodo) {
        return NextResponse.json({msg: 'Todo not found'}, {status: 404});
    }
    return NextResponse.json({msg: 'Task Done'});
}

export async function POST(request){
    const {title, desc} = await request.json();
    await TodoModel.create({title, desc});
    return NextResponse.json({msg:  'Todo Done'});
}
//a0i2Z2pWTPCvwGAn rushaanchawla