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
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
        db.Post.belongsToMany(db.Post, { as: 'Retweet' });
    };
    return Post;
}