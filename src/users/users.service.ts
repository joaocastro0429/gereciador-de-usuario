import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.user.findMany()
    }

    async create(data: { name: string, email: string,password:string }) {
        const users = await this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password:data.password

            }

        })
        return {
            message: "Usuario cadastrado com sucesso !"
        }


    }
    async findOne(id: string) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        })

        if (!user) {
            throw new Error("usuário não encontrado")
        }

        return user
    }

    async update(id: string, data: { name: string, email: string }) {

        const user = await this.prisma.user.findUnique({ where: { id } })


        if (!user) {
            throw new NotFoundException('Usuário não encontrado');
        }

        await this.prisma.user.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email
            }
        })
        return user

    }

    async delete(id: string) {
        const user = await this.prisma.user.findUnique({ where: { id } });
      
        if (!user) {
          throw new NotFoundException('Usuário não encontrado');
        }
      
        const deleted = await this.prisma.user.delete({ where: { id } });
      
        return {
          message: 'Excluído com sucesso',
          user: deleted,
        };
      }
    }