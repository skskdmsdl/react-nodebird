module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Image', { // MySQL에는 users로 저장됨
        // id가 기본적으로 들어있음
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
    });
    Image.associate = (db) => {};
    return Image;
}