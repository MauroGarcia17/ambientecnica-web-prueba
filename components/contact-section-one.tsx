import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ContactSection() {
    return (
        <section className="bg-muted py-15 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="text-4xl font-semibold lg:text-5xl">Contáctanos, estamos aqui para ayudarte!</h1>
                <p className="text-muted-foreground mt-4 text-lg">Cuenta con nosotros</p>
                <div className="mt-12 grid gap-12 lg:grid-cols-5">
                    <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h2 className="mb-3 text-lg font-semibold">Teléfono</h2>
                                <Link
                                    href="mailto:hello@tailus.com"
                                    className="text-primary text-lg hover:underline">
                                    (01) 123-4567
                                </Link>
                                <p className="mt-3 text-sm">+51 999 999 999</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">Información de contacto</h3>
                                <Link
                                    href="mailto:press@tailark.com"
                                    className="text-primary text-lg hover:underline">
                                    ambientecnica@gmail.com
                                </Link>
                                <p className="mt-3 text-sm">(01) 123-4567</p>
                            </div>
                        </div>
                    </div>

                    <form
                        action=""
                        className="@container lg:col-span-3">
                        <Card className="p-8 sm:p-12">
                            <h3 className="text-xl font-semibold">Envíanos un mensaje</h3>
                            <p className="mt-4 text-sm">Ingresa tus datos:</p>

                            <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                                <div className="@md:grid-cols-2 grid gap-3 *:space-y-3">
                                    <div>
                                        <Label
                                            htmlFor="name"
                                            className="space-y-2">
                                            Nombre completo
                                        </Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Correo electrónico</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="@md:grid-cols-2 grid gap-3 *:space-y-3">
                                    <div>
                                        <Label htmlFor="companyName">Nombre de la empresa</Label>
                                        <Input
                                            type="text"
                                            id="companyName"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="job">Rubro de la empresa</Label>
                                        <Input
                                            type="text"
                                            id="job"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="msg">Mensaje</Label>
                                    <Textarea
                                        id="msg"
                                        rows={3}
                                    />
                                </div>
                                <Button>Enviar</Button>
                            </div>
                        </Card>
                    </form>
                </div>
            </div>
        </section>
    )
}
