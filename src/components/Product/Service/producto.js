const productos = {
    Producto: {
        nombre: 'Remera manga corta negra',
        precio: 200,
        review: 120,
        tamaños: ['XXS', 'XS', 'S', 'M', 'L'],
        reputacion: {
            reputacion: { color: '#B9101E', reputacion: 'Mala', reputacionIcon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726650569/down-arrows-download-svgrepo-com_ikt3qr.jpg?_s=public-apps', porcentaje: 25, atributo: 'Reputacion', icon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726600219/verified-ui-shield-svgrepo-com_2_hri0jr.jpg?_s=public-apps' },
            atencion: { color: '#ffa819', reputacion: 'Media', reputacionIcon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726650899/user-people-account-svgrepo-com_1_zctevy.jpg?_s=public-apps', porcentaje: 50, atributo: 'Atencion', icon: '' },
            velocidad: { color: '#19ff77', reputacion: 'Buena', reputacionIcon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726650201/up-direction-upload-svgrepo-com_1_lfdxqb.jpg?_s=public-apps', porcentaje: 75, atributo: 'Velocidad de entrega', icon: 'https://asset.cloudinary.com/dt6otshxt/19807a3983ada126be1c1e79d481724d' },
        },
        comentarios: [
            {
                nombre: "Juan Pérez",
                comentario: "Muy buena remera, me encanta la tela y el color negro es muy elegante.",
                foto: "https://randomuser.me/api/portraits/men/32.jpg",
                estrellas: 4
            },
            {
                nombre: "María López",
                comentario: "La remera blanca es perfecta para el verano, súper cómoda y ligera.",
                foto: "https://randomuser.me/api/portraits/women/44.jpg",
                estrellas: 5
            },
            {
                nombre: "Carlos García",
                comentario: "Compré la gris y me encanta, va bien con todo, la calidad es excelente.",
                foto: "https://randomuser.me/api/portraits/men/65.jpg",
                estrellas: 3
            }
        ]
    }
};

export default productos;
