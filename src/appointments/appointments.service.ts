import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common'; import { InjectModel } from '@nestjs/mongoose'; import { Model, Types } from 'mongoose'; import { Appointment, AppointmentDocument } from './schemas/appointment.schema'; import { CreateAppointmentDto } from './dto/create-appointment.dto';
@Injectable() export class AppointmentsService{
  constructor(@InjectModel(Appointment.name) private model:Model<AppointmentDocument>){}
  async create(dto:CreateAppointmentDto, requester:{userId:string, role:string}){
    if(requester.role==='PATIENT' && requester.userId!==dto.patientId) throw new ForbiddenException('Patients can only book themselves');
    const existing = await this.model.findOne({ doctorId: dto.doctorId, startTime: new Date(dto.startTime) }).lean();
    if(existing) throw new BadRequestException('Slot already booked');
    return this.model.create({ ...dto, startTime: new Date(dto.startTime) });
  }
  async listMine(user:{userId:string, role:string}){
    if(user.role==='DOCTOR') return this.model.find({ doctorId: user.userId }).sort({startTime:-1}).lean();
    if(user.role==='PATIENT') return this.model.find({ patientId: user.userId }).sort({startTime:-1}).lean();
    return this.model.find().sort({startTime:-1}).lean();
  }
  async reschedule(id:string, startTime:string, user:{userId:string, role:string}){
    const appt = await this.model.findById(id); if(!appt) throw new BadRequestException('Not found');
    if(user.role==='PATIENT' && appt.patientId.toString()!==user.userId) throw new ForbiddenException();
    if(user.role==='DOCTOR' && appt.doctorId.toString()!==user.userId) throw new ForbiddenException();
    const conflict = await this.model.findOne({ doctorId: appt.doctorId, startTime: new Date(startTime), _id: {$ne: appt._id} });
    if(conflict) throw new BadRequestException('Slot already booked');
    appt.startTime = new Date(startTime); await appt.save(); return appt.toObject();
  }
  async cancel(id:string, user:{userId:string, role:string}){
    const appt = await this.model.findById(id); if(!appt) return {deleted:false};
    if(user.role==='PATIENT' && appt.patientId.toString()!==user.userId) throw new ForbiddenException();
    if(user.role==='DOCTOR' && appt.doctorId.toString()!==user.userId) throw new ForbiddenException();
    await appt.deleteOne(); return {deleted:true};
  }
}
