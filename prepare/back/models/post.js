module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Post', { // MySQL에는 users로 저장됨
        // id가 기본적으로 들어있음
        content: {
            type: DataTypes.TEXT, // 무제한 길이
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Post.associate = (db) => {};
    return Post;
}